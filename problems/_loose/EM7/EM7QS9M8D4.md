---
tag: EM7QS9M8D4
kind: problem
type: answer
answer: 53000+2500*3=60500
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=161909
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Two straight railway lines intersect at point $N$ at an angle of $60^{\circ}$. Inside this angle is an airfield (point $A$) located 10 km and 20 km from these railways. Find the locations of points $B$ and $C$ (loading and unloading points) on these railways, so that the cost of cyclic transportation by road from $A$ to $B$, then to $C$, and back to $A$ is minimized. Assuming that the transportation of 1 ton of cargo by road along $A B C A$ costs 100 rubles per km, determine:

a) whether it is possible to transport 10 tons of cargo for a sum of 50 thousand rubles, without considering the costs of loading and unloading the cargo?

b) The same question for a sum of 60 thousand rubles, considering the costs of complete reloading of the cargo (2500 rubles for 10 tons) at 2 out of 4 points? at 3 out of 4 points? at all 4 points?
