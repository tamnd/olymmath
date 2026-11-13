---
tag: V9TFYW25ZV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=115239
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On a certain planet, there are 1000 cities $c_{1}, c_{2}, \ldots, c_{1000}$, and three airlines $X, Y, Z$ serve these cities. For any $1 \leq \mathrm{i}<\mathrm{j} \leq 1000$, exactly one airline operates a one-way flight from $\mathrm{c}_{\mathrm{i}}$ to $\mathrm{c}_{\mathrm{j}}$. Find the largest positive integer $\mathrm{n}$ such that a traveler can always choose one of the airlines and complete a journey from a starting city, passing through $\mathrm{n}-1$ cities (excluding the starting and ending cities), and finally arriving at the $\mathrm{n}$-th city.
