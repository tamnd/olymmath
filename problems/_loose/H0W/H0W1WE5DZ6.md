---
tag: H0W1WE5DZ6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231547
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $k$, $n$ be fixed positive integers. In a circular table, there are placed pins numbered successively with the numbers $1, 2 \dots, n$, with $1$ and $n$ neighbors. It is known that pin $1$ is golden and the others are white. Arnaldo and Bernaldo play a game, in which a ring is placed initially on one of the pins and at each step it changes position. The game begins with Bernaldo choosing a starting pin for the ring, and the first step consists of the following: Arnaldo chooses a positive integer $d$ any and Bernaldo moves the ring $d$ pins clockwise or counterclockwise (positions are considered modulo $n$, i.e., pins $x$, $y$ equal if and only if $n$ divides $x-y$). After that, the ring changes its position according to one of the following rules, to be chosen at every step by Arnaldo:

**Rule 1:** Arnaldo chooses a positive integer $d$ and Bernaldo moves the ring $d$ pins clockwise or counterclockwise.

**Rule 2:** Arnaldo chooses a direction (clockwise or counterclockwise), and Bernaldo moves the ring in the chosen direction in $d$ or $kd$ pins, where $d$ is the size of the last displacement performed.

Arnaldo wins if, after a finite number of steps, the ring is moved to the golden pin. Determine, as a function of $k$, the values of $n$ for which Arnaldo has a strategy that guarantees his victory, no matter how Bernaldo plays.
