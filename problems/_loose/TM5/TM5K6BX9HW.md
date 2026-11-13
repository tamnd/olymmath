---
tag: TM5K6BX9HW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=119580
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The hundredth problem, given a positive integer $\mathrm{n}>1, \mathrm{~T}$ is the set of all ordered triples $(\mathrm{x}, \mathrm{y}, \mathrm{z})$, where the positive integers $x, y, z$ are distinct and $1 \leq x, y, z \leq 2 n$. The set $A$ consists of some ordered pairs $(u, v)$, such that for any element $(\mathrm{x}, \mathrm{y}, \mathrm{z})$ in $T$, $\{(\mathrm{x}, \mathrm{y}),(\mathrm{x}, \mathrm{z}),(\mathrm{y}, \mathrm{z})\} \cap \mathrm{A} \neq \emptyset$, we say $\mathrm{A}$ is connected to $\mathrm{T}$.
(1) Find the number of elements in $\mathrm{T}$;
(2) Prove: There exists a set $A$ connected to $T$ that has exactly $2 n(n-1)$ elements;
(3) Prove: Any set $A$ connected to $\mathrm{T}$ has at least $2 \mathrm{n}(\mathrm{n}-1)$ elements.
