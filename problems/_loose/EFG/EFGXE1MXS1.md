---
tag: EFGXE1MXS1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=237112
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Any two islands of the Chaos Archipelago are connected by a bridge - a red bridge or a blue bridge. Show that at least one of the following two assertions holds:

$\mathcal{A}_{1}$: For any two islands $a$ and $b$, we can reach $b$ from $a$ through at most $3$ red bridges (and no blue bridges).
$\mathcal{A}_{2}$: For any two islands $a$ and $b$, we can reach $b$ from $a$ through at most $2$ blue bridges (and no red bridges).

*Alternative formulation:* Let $G$ be a graph. Prove that the diameter of $G$ is $\leq 3$ or the diameter of the complement of $G$ is $\leq 2$.

*Note.* This problem is the main Theorem in
Frank Harary, Robert W. Robinson, *The Diameter of a Graph and its Complement*, The American Mathematical Monthly, Vol. 92, No. 3. (Mar., 1985), pp. 211-212.

darij
