---
tag: P3DC8RXY25
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221012
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $M$ is a four digit positive interger. Write $M$ backwards and get a new number $N$.(e.g $M=1234$ then $N=4321$)
Let $C$ is the sum of every digit of $M$. If $M,N,C$ satisfies
(i)$d=\gcd(M-C,N-C)$ and $d<10$
(ii)$\dfrac{M-C}{d}=\lfloor\dfrac{N}{2}+1\rfloor$
(1)Find $d$.
(2)If there are "m(s)" $M$ satisfies (i) and (ii), and the largest $M$=$M_{max}$. Find $(m,M_{max})$
