---
tag: 4QBZNTQJEA
kind: problem
type: answer
answer: 2n - 2 \text{ and } n(n-1)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221286
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n\geq 2$ be a fixed positive integer. Let $\{a_1,a_2,...,a_n\}$ be fixed positive integers whose sum is $2n-1$. Denote by $S_{\mathbb{A}}$ the sum of elements of a set $A$. Find the minimal and maximal value of $S_{\mathbb{X}}\cdot S_{\mathbb{Y}}$ where $\mathbb{X}$ and $\mathbb{Y}$ are two sets with the property that $\mathbb{X}\cup \mathbb{Y}=\{a_1,a_2,...,a_n\}$ and $\mathbb{X}\cap \mathbb{Y}=\emptyset.$

*Note: $\mathbb{X}$ and $\mathbb{Y}$ can have multiple equal elements. For example, when $n=5$ and $a_1=...=a_4=1$ and $a_5=5$, we can consider $\mathbb{X}=\{1,1,1\}$ and $\mathbb{Y}=\{1,5\}$. Moreover, in this case, $S_\mathbb{X}=3$ and $S_{\mathbb{Y}}=6.$*
