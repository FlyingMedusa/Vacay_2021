def a():
    x = 5
    yield x

    x += 1
    yield x

example = a()
print(next(example))
print(next(example))