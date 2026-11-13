---
tag: 2JZ9EKPN65
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=79190
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(Sperner) Let $\mathcal{A}$ be a set of subsets of $\llbracket 1, 2n \rrbracket$: we assume that for all distinct $B$ and $C$ in $\mathcal{A}$, $B$ is not included in $C$. (We then say that $\mathcal{A}$ is an antichain.)

$\Delta$ Show the following inequality:

$$
\sum_{B \in \mathcal{A}} \frac{1}{\binom{n}{|B|}} \leq 1
$$

$\triangleright$ Deduce that $|\mathcal{A}| \leq \binom{n}{\left[\frac{n}{2}\right]}$.
