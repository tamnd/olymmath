---
tag: ANYN6QTQJH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33661
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\mathscr{A}$ be an arbitrary system of subsets of $\Omega$. Prove that

$$
\sigma(\mathscr{A})=\bigcup_{\left\{A_{n}\right\}} \sigma\left(A_{1}, A_{2}, \ldots\right)
$$

where the union is taken over all at most countable subsystems $\left\{A_{n}\right\} \subseteq \mathscr{A}$.

In other words, no matter what set $A \in \mathscr{A}$, in $\mathscr{A}$ one can select such an at most countable collection of sets $\mathscr{G}=\mathscr{G}(A)$ that $A \in \sigma(\mathscr{G})$.
