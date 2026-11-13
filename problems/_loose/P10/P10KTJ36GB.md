---
tag: P10KTJ36GB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=77672
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\mathrm{P}(\mathrm{X})$ be a unitary polynomial with real coefficients of degree 2022. Emile plays the following game: he writes the polynomial $P(X)$ on the board and at each step, if the polynomial $f(X)$ is written on the board, Emile can replace it with:

- The polynomial $f(X)+c$, for $c$ a real number of his choice, or

- the polynomial $\mathrm{P}(\mathrm{f}(\mathrm{X}))$.

Find all non-negative integers $n$ such that, regardless of the initial polynomial $\mathrm{P}$, Emile can find a sequence of operations such that the resulting polynomial has exactly $\mathrm{n}$ distinct real roots.
