import pygame
import sys
import random
from threading import Timer
from pygame import mixer

BLACK = pygame.Color(0, 0, 0)
WHITE = pygame.Color(255, 255, 255)

pygame.init()

# Preparation
screen_width = 1200
screen_height = 600
level = 500
screen = pygame.display.set_mode([screen_width, screen_height])
pygame.display.set_caption("Running Game")
background = [pygame.image.load('./src/bg.jpeg'), pygame.image.load('./src/bg.jpeg')]
for i in range(len(background)):
    background[i] = pygame.transform.scale(background[i], [screen_width, screen_height])
clock = pygame.time.Clock()
FONT = pygame.font.SysFont("monospace", 50)
character = [[], []]
for i in range(10):
    character[0].append(pygame.image.load(("./src/run" + str(i + 1) + ".png")))
    character[0][i] = pygame.transform.scale_by(character[0][i], 0.65)
for i in range(8):
    character[1].append(pygame.image.load(("./src/jump" + str(i + 1) + ".png")))
    character[1][i] = pygame.transform.scale_by(character[1][i], 0.30)
text_start = FONT.render("Press [Any Key] to start >>>", False, BLACK, None)
text_end1 = FONT.render("You die...", False, BLACK, None)
text_end2 = FONT.render("Press [Any Key] to restart >>>", False, BLACK, None)
hearticon = pygame.transform.scale_by(pygame.image.load("./src/heart.png"), 0.5)
shieldicon = pygame.transform.scale_by(pygame.image.load('./src/shield.png'), 0.3)
randitem = [pygame.transform.scale_by(pygame.image.load('./src/shield.png'), 0.3),
            pygame.transform.scale_by(pygame.image.load('./src/addheart.png'), 0.5)]


# Music
mixer.init()
mixer.music.load('./src/music.mp3')
mixer.music.play()
mixer.music.set_volume(0.2)
jumpsound = mixer.Sound('./src/jumpsound.mp3')
jumpsound.set_volume(2.5)
monstersound = mixer.Sound('./src/monstersound.mp3')
monstersound.set_volume(0.7)
gameover = mixer.Sound('./src/gameover.mp3')
beat = mixer.Sound('./src/beat.mp3')
firesound = mixer.Sound('./src/fireball.wav')
addhealth = mixer.Sound('./src/addhealth.mp3')
warning = mixer.Sound('./src/warning.wav')
warning.set_volume(0.12)


# Enemy
enemy = []
for i in range(2):
    enemy.append(pygame.image.load('./src/slime' + str(i + 1) + '.png'))
    enemy[i] = pygame.transform.scale(enemy[i], [100, 100])
fire = []
for i in range(7):
    fire.append(pygame.image.load(("./src/fire" + str(i + 1) + ".png")))
    fire[i] = pygame.transform.scale_by(fire[i], 0.35)


# Timer & status & change (number & bool variables)
game_status = False
bg_change = 0
heart = 3
e_ran = random.randrange(2)
e_change = 0
looph = level - enemy[e_ran].get_height()
v_change = 0
r_time = 0
run_status = False
j_time = 0
old_j_time = 0
j_change = 0
f_time = 0
f_change = 0
pre_line = level - character[0][0].get_height() / 2
score = 0
score_count = False
shld = 0
i_change = 0
i_time = 0
i_period = random.randint(2, 6)
icon = random.randrange(2)
fs_status = False
w_status = False


# Functions
def start():
    global game_status, r_time, run_status, j_time, old_j_time, j_change, v_change, heart, score, score_count,\
        e_change, looph, f_time, f_change, shld, i_time, i_change, fs_status, w_status
    game_status = True
    run_status = True
    heart = 3
    e_change = 0
    looph = level - enemy[e_ran].get_height()
    v_change = 0
    r_time = 0
    j_time = 0
    old_j_time = 0
    j_change = 0
    f_time = 0
    f_change = 0
    score = 0
    score_count = False
    shld = 0
    i_change = 0
    i_time = 0
    fs_status = False
    w_status = False


def is_collide(p1, p2, p1pos, p2pos):
    # (surface1, surface2, [x, y], [x, y])
    #   p1.left  > p2.right                       p1.right < p2.left
    if (p1pos[0] + 25 > p2pos[0] + p2.get_width()) or (p1pos[0] + p1.get_width() < p2pos[0] + 25) \
            or (p1pos[1] + p1.get_height() < p2pos[1] + 50) or (p1pos[1] + 50 > p2pos[1] + p2.get_height()):
        #       p1.down < p2.top                           p1.top > p2.down
        return False
    else:
        return True


def item():
    global i_time, i_change, heart, game_status, i_period, randitem, icon, shld, r_time
    i_timer = Timer(0.03, item)
    i_timer.start()
    if not game_status:
        i_timer.cancel()
        return

    if i_time * 3 / 100 / i_period > 1:
        i_change -= 20
    if i_change + randitem[icon].get_width() < -screen_width:
        i_change = 0
        i_time = 0
        i_period = random.randint(2, 6)
        icon = random.randrange(2)
    i_time += 1

    if (is_collide(character[1][i_time % 8], randitem[icon],
                   [500, level - character[1][j_time % 8].get_height() + j_change],
                   [screen_width + i_change, level-randitem[icon].get_height()]) and not run_status) \
            or (is_collide(character[0][r_time % 10], randitem[icon],
                           [500, level - character[0][r_time % 10].get_height()],
                           [screen_width + i_change, level-randitem[icon].get_height()]) and run_status):

        if icon == 0:
            shld = 1
        else:
            heart += 1
            addhealth.play()
        i_change = 0
        i_time = 0
        i_period = random.randint(2, 6)
        icon = random.randrange(2)


def fight():
    # Slime
    global e_ran, e_change, r_time, looph, v_change, score, score_count, f_time, f_change, heart, shld, fs_status
    e_timer = Timer(0.03, fight)
    e_timer.start()
    if not game_status:
        e_timer.cancel()
        return

    if e_change < -screen_width:
        e_change = 0
        e_ran = random.randrange(2)
        score_count = False
    else:
        e_change -= 20

    if screen_width + e_change < 500 and not score_count:
        score += 100
        score_count = True

    if looph + enemy[e_ran].get_height() < level - 300:
        v_change += 15
    elif looph >= level - enemy[e_ran].get_height():
        monstersound.stop()
        monstersound.play()
        v_change -= 15
    looph += v_change

    # Fire
    f_time += 1
    if f_time > 80 + 80:
        f_change -= 17
        if not fs_status:
            firesound.play()
            fs_status = True
    if f_change < -(screen_width + fire[0].get_width()):
        f_change = 0
        f_time = 0
        fs_status = False
    if (is_collide(character[1][j_time % 8], fire[f_time % 7],
                   [500, level - character[1][j_time % 8].get_height() + j_change],
                   [screen_width + f_change - 20, pre_line - fire[0].get_height() / 2]) and not run_status) \
            or (is_collide(character[0][r_time % 10], fire[f_time % 7],
                           [500, level - character[0][r_time % 10].get_height()],
                           [screen_width + f_change - 20, pre_line - fire[0].get_height() / 2]) and run_status):
        f_change = 0
        fs_status = False
        f_time = 0
        if not shld:
            heart -= 1
            beat.play()
        else:
            shld = 0

    if (is_collide(character[1][j_time % 8], enemy[e_ran],
                   [500, level - character[1][j_time % 8].get_height() + j_change],
                   [screen_width + e_change, looph]) and not run_status)\
            or (is_collide(character[0][r_time % 10], enemy[e_ran],
                           [500, level - character[0][r_time % 10].get_height()],
                           [screen_width + e_change, looph]) and run_status):
        e_change = 0
        e_ran = random.randrange(2)
        if not shld:
            heart -= 1
            beat.play()
        else:
            shld = 0


def run():
    global r_time, screen_width, looph, game_status, heart, e_ran, e_change
    r_timer = Timer(0.07, run)
    r_timer.start()
    if not run_status or not game_status:
        r_timer.cancel()
        return
    r_time += 1


def jump():
    global j_time, run_status, old_j_time, j_change, game_status, heart, e_ran, e_change
    j_timer = Timer(0.025, jump)
    j_timer.start()
    if not game_status:
        j_timer.cancel()
        return
    if j_time - old_j_time == 32:
        run_status = True
        j_timer.cancel()
        old_j_time = j_time
        run()
        return
    if j_time % 32 < 16:
        j_change -= 20
    else:
        j_change += 20
    j_time += 1


def life():
    global heart, game_status
    if heart > 3:
        heart = 3
    if heart == 3:
        screen.blit(hearticon, [10, 10])
        screen.blit(hearticon, [110, 10])
        screen.blit(hearticon, [210, 10])
    elif heart == 2:
        screen.blit(hearticon, [10, 10])
        screen.blit(hearticon, [110, 10])
    elif heart == 1:
        screen.blit(hearticon, [10, 10])
    else:
        mixer.music.stop()
        if game_status:
            gameover.play()
        game_status = False


screen.blit(background[0], [0, 0])
screen.blit(text_start, [200, 100])


# Main loop
while True:
    pygame.time.Clock().tick(50)
    for event in pygame.event.get():
        if event.type == pygame.KEYDOWN:
            if (event.key == pygame.K_SPACE or event.key == pygame.K_UP) and game_status:
                if run_status:
                    run_status = False
                    jump()
                    jumpsound.play()

            if not game_status:
                start()
                run()
                fight()
                item()
                gameover.stop()

        key = pygame.key.get_pressed()
        if event.type == pygame.QUIT or key[pygame.K_ESCAPE]:
            game_status = False
            pygame.quit()
            sys.exit()

    # All commands of showing items on screen
    screen.blit(background[0], [0 + bg_change, 0])
    screen.blit(background[1], [screen_width + bg_change, 0])

    if game_status:
        bg_change -= 6
        if bg_change == -screen_width:
            bg_change = 0
        if not mixer.music.get_busy():
            mixer.music.play()

        if not run_status:
            screen.blit(character[1][j_time % 8], [500, level - character[1][j_time % 8].get_height() + j_change])
        else:
            screen.blit(character[0][r_time % 10], [500, level - character[0][r_time % 10].get_height()])

        screen.blit(enemy[e_ran], [screen_width + e_change, looph + 25])
        text_score = FONT.render(("Score: %d" % score), False, BLACK, None)
        screen.blit(text_score, [screen_width - text_score.get_width() - 20, 10])
        screen.blit(randitem[icon], [screen_width + i_change, level - randitem[icon].get_height()])
        life()

        if r_time < 100:
            f_time = 0
        elif f_time == 0:
            pre_line = random.randint(int((level - character[0][0].get_height() / 2 - 200) / 50),
                                      int((level - character[0][0].get_height() / 2) / 50)) * 50
        if 80 < f_time < 80 + 80:
            if f_time % 20 < 10:
                pygame.draw.rect(screen, pygame.Color(250, 52, 92), [0, pre_line, screen_width, 2])
            else:
                pygame.draw.rect(screen, pygame.Color(150, 52, 92), [0, pre_line, screen_width, 2])
            if not w_status:
                warning.play()
                w_status = True
        else:
            warning.stop()
            w_status = False
            screen.blit(fire[f_time % 7], [screen_width + f_change - 20, pre_line - fire[0].get_height() / 2])

    elif r_time == 0:
        screen.blit(text_start, [200, 100])
    else:
        warning.stop()
        screen.blit(text_end1, [200, 100])
        screen.blit(text_end2, [200, 170])
    if shld != 0:
        screen.blit(shieldicon, [0, shieldicon.get_height()/2+hearticon.get_height()])

    pygame.display.update()

# END
