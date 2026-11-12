---
tag: 68QSCJZ7JF
kind: problem
type: answer
answer: 2020=(339)^{3}+337^{3}+(-338)^{3}+(-338)^{3}+(-2)^{3}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=2497
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Note that for any $n \in Z$

$$
(n+1)^{3}+(n-1)^{3}+(-n)^{3}+(-n)^{3}=6 n
$$

i.e., any integer of the form $a=6 n$ can be represented as the sum of the cubes of four, and thus, with zero, five integers. Numbers of the form $a=6 n \pm 1$ can be represented in the form

$$
a=(n+1)^{3}+(n-1)^{3}+(-n)^{3}+(-n)^{3}+( \pm 1)^{3}
$$

Numbers of the form $a=6 n+2=6(n-1)+8$ can be represented as the sum of five cubes:

$$
a=n^{3}+(n-2)^{3}+(-n+1)^{3}+(-n+1)^{3}+2^{3}
$$

For numbers of the form $a=6 n-2=6(n+1)-8$, the representation is valid:

$$
a=(n+2)^{3}+n^{3}+(-n-1)^{3}+(-n-1)^{3}+(-2)^{3} .
$$

Finally, for $a=6 n+3=6(n-4)+27$, the representation is valid:

$$
a=(n-3)^{3}+(n-5)^{3}+(-n+4)^{3}+(-n+4)^{3}+(3)^{3}
$$

The representation of the number $a=2020=337 \cdot 6-2$ can be obtained using formula (3) for $n=337$:

$$
2020=(339)^{3}+337^{3}+(-338)^{3}+(-338)^{3}+(-2)^{3}
$$
