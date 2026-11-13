---
tag: 7ZG2ACED07
kind: problem
type: answer
answer: a) N = 101. b) Maximum sum of degrees = 394300.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: es
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Spain/train/0001.parquet#row=295
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: es-ome
    source: hf-mathnet
    label: Spain LVIII Olimpiada Matemática Española
---
En un grupo de 2022 estudiantes, algunos son amigos entre sí, y la amistad es siempre recíproca. Sabemos que cualquier subconjunto de esos estudiantes tiene la siguiente propiedad: siempre existe un estudiante del subconjunto que es amigo de, a lo sumo, 100 estudiantes del mismo.

a) Determina el menor entero positivo $N$ que nos asegura que se cumple la siguiente propiedad: es posible dividir a los estudiantes en $N$ grupos (no necesariamente del mismo tamaño), de manera que dos estudiantes que están en el mismo grupo nunca son amigos entre sí.

b) Numeramos a los estudiantes del 1 al 2022. Sea $c_i$ el número de amigos del estudiante $i$. Determina el máximo valor que puede tomar la suma
$$
c_1 + c_2 + \dots + c_{2022}.
$$
