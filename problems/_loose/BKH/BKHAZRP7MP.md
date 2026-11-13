---
tag: BKHAZRP7MP
kind: problem
type: answer
answer: "217"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=95946
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A bag contains $n$ balls numbered from 1 to $n$, with $n \geq 2$. There are $n \times(n-1)$ ways in which Julio can remove one ball from the bag and then remove a second ball. This is because there are $n$ possible choices for the first ball and then $n-1$ possible choices for the second ball. For example, when a bag contains 6 balls numbered from 1 to 6,4 of which are black and 2 of which are gold, there are $6 \times 5=30$ ways in which he can remove two balls in this way, and $4 \times 3=12$ ways in which both balls are black.
(a) A bag contains 11 balls numbered from 1 to 11,7 of which are black and 4 of which are gold. Julio removes two balls as described above. What is the probability that both balls are black?
(b) For some integer $g \geq 2$, a second bag contains 6 black balls and $g$ gold balls; the balls are numbered from 1 to $g+6$. Julio removes two balls as described above. The probability that both balls are black is $\frac{1}{8}$. Determine the value of $g$.
(c) For some integer $x \geq 2$, a third bag contains $2 x$ black balls and $x$ gold balls; the balls are numbered from 1 to $3 x$. Julio removes two balls as described above. The probability that both balls are black is $\frac{7}{16}$. Determine the value of $x$.
(d) For some integer $r \geq 3$, a fourth bag contains 10 black balls, 18 gold balls, and $r$ red balls; the balls are numbered from 1 to $r+28$. This time, Julio draws three balls one after another. The probability that two of these three balls are black and one of these three balls is gold is at least $\frac{1}{3000}$. What is the largest possible value of $r$ ?
