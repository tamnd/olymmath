---
tag: 5FMEBDF8VG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1979 Romania Team Selection Tests
    url: https://artofproblemsolving.com/community/c6h3053420
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54262
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=247781
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-tst/1979
    source: hf-ai-mo-aops
    label: 1979 Romania Team Selection Tests
---
Let $a,b,c\in \mathbb{R}$ with $a^2+b^2+c^2=1$ and $\lambda\in \mathbb{R}_{>0}\setminus\{1\}$ . Then for each solution $(x,y,z)$ of the system of equations:
$$
\begin{cases}
x-\lambda y=a,
y-\lambda z=b,
z-\lambda x=c.
\end{cases}
$$
we have $ x^2+y^2+z^2\leqslant \frac1{(\lambda-1)^2}$ .

*Radu Gologan*
