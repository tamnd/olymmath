---
tag: X063WQVPR8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=239373
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Suppose $S$ is the set of all positive integers. For $a,b \in S$, define
$$a * b=\frac{\text{lcm}[a,b]}{\text{gcd}(a,b)}$$
For example $8*12=6$.
Show that **exactly two** of the following three properties are satisfied:
(i) If $a,b \in S$, then $a*b \in S$.
(ii) $(a*b)*c=a*(b*c)$ for all $a,b,c \in S$.
(iii) There exists an element $i \in S$ such that $a *i =a$ for all $a \in S$.
