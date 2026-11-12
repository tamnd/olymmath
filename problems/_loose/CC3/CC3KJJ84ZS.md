---
tag: CC3KJJ84ZS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2015 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h1165948
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=12958
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pumac/2015
    source: hf-ai-mo-aops
    label: 2015 Princeton University Math Competition
---
We define the ridiculous numbers recursively as follows:

- 1 is a ridiculous number.

- If $a$ is a ridiculous number, then $\sqrt{a}$ and $1+\sqrt{a}$ are also ridiculous numbers.

A closed interval $I$ is ``boring'' if

- $I$ contains no ridiculous numbers, and
- There exists an interval $[b,c]$ containing $I$ for which $b$ and $c$ are both ridiculous numbers.

The smallest non-negative $l$ such that there does not exist a boring interval with length $l$ can be represented in the form $\dfrac{a + b\sqrt{c}}{d}$ where $a, b, c, d$ are integers, $\gcd(a, b, d) = 1$ , and no integer square greater than 1 divides $c$ . What is $a + b + c + d$ ?
