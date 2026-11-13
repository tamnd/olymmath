---
tag: DPKKCWHQAM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263816
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n > 1$ be an integer. Let $A$ denote the set of divisors of $n$ that are less than $\sqrt n$. Let $B$ denote the set of divisors of $n$ that are greater than $\sqrt n$. Prove that there exists a bijective function $f \colon A \to B$ such that $a$ divides $f(a)$ for all $a \in A$.

(We say $f$ is *bijective* if for every $b \in B$ there exists a unique $a \in A$ with $f(a) = b$.)
