---
tag: T3XVRNM6W4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261552
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For any nonempty set of integers $X$, define the function $$f(X) = \frac{(-1)^{|X|}}{ \left(\prod_{k\in X} k \right)^2}$$ where $|X|$ denotes the number of elements in $X$.
Consider the set $S = \{2, 3, . . . , 13\}$ . Note that $1$ is not an element of $S$.
Compute $$\sum_{T\subseteq S, T \ne \emptyset} f(T).$$
where the sum is taken over all nonempty subsets $T$ of $S$.
