---
tag: YRJSB3TPH6
kind: problem
type: answer
answer: "2"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=161234
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $p>3$ be a prime number. For an arbitrary set $S \subseteq \mathbb{Z}$ and $a \in \mathbb{Z}$, let

$$
S_{a}=\left\{x \in\{0,1, \ldots, p-1\} \mid(\exists s \in S) x \equiv_{p} a \cdot s\right\}
$$

(a) How many sets $S \subseteq\{1,2, \ldots, p-1\}$ are there such that the sequence $S_{1}, S_{2}, \ldots, S_{p-1}$ contains exactly two distinct elements?

(b) Determine all possible values of the number $k \in \mathbb{N}$ for which there exists a set $S \subseteq\{1,2, \ldots, p-1\}$ such that the sequence $S_{1}, S_{2}, \ldots, S_{p-1}$ contains exactly $k$ distinct elements.

(Milan Basić, Miloš Milosavljević)
