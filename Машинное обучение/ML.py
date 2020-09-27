import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from tensorflow import keras
from tensorflow.keras.layers import Dense

# Искусственно создаем обьекты
X = []
for i in range(-20, 21):
    X.append(i)

# Искусственно создаем ответы
y = []
for i in range(-20, 21):
    y.append(round(i*1.8) + 32)

X = np.array(X)
y = np.array(y)

model = keras.Sequential()
model.add(Dense(units=1, activation="linear", input_shape=(1,)))
model.compile(loss="mean_squared_error", optimizer=keras.optimizers.Adam(0.1))

history = model.fit(X, y, epochs=400, verbose=0)

print(model.predict([100]))
