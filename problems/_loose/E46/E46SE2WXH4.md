---
tag: E46SE2WXH4
kind: problem
type: answer
answer: "4"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=6430
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Propose a word problem that reduces to solving the inequality

$$
\frac{11}{x+1.5}+\frac{8}{x} \geqslant \frac{12}{x+2}+2
$$

Write the problem statement, its solution, and the answer.

Example of the required problem. Points A and B are connected by two roads: one is 19 km long, and the other is 12 km long. At 12:00, a pedestrian left point A on the longer road and walked the first 11 km at a constant speed, and then, getting tired, walked the remaining distance to point B at an average speed 1.5 km/h slower. At 14:00, a second pedestrian left point A on the shorter road and walked the entire distance at an average speed 0.5 km/h faster than the first pedestrian initially walked. What was the average speed at which the first pedestrian walked the last 8 km of the journey, if it is known that he arrived at point B no earlier than the second pedestrian?

Brief solution. If $ x $ is the required average speed of the first pedestrian (in km/h) on the second part of the journey, then $ x+1.5 $ is his speed on the first part, and $ (x+1.5)+0.5=x+2 $ is the average speed of the second pedestrian. Then, by calculating the time each pedestrian spent on the journey, we obtain the required inequality. Since by the problem's condition $ x > 0 $, both sides of the inequality can be multiplied by the quantity $ x(x+1.5)(x+2) > 0 $, then we get $ 11x(x+2) + 8(x+1.5)(x+2) \geqslant 12x(x+1.5) + 2x(x+1.5)(x+2) $, or, after transformations, $ (x-4)(x+1)(x+3) \leqslant 0 $. Therefore, $ 0 < x \leqslant 4 $, and all found values of $ x $ satisfy the problem's condition.
