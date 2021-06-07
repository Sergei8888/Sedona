
import math

def time(t):
	return t - 0.15 * math.sin(2 * math.pi * t)

def value(t):
	return 50 * (1 + math.sin(2 * math.pi * t))


print('@keyframes loading {')

for i in range(50):
	t = time(i / 50)
	x, y = value(2 * t), value(t)
	print(f'\t{2 * i}% {{left: calc({x}% - var(--size) * 0.5);; top: calc({y}% - var(--size) * 0.5);;}}')


print('\t100% {left: calc(50% - var(--size) * 0.5); top: calc(50% - var(--size) * 0.5);}')

print('}')