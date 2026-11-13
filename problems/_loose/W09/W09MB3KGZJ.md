---
tag: W09MB3KGZJ
kind: problem
type: answer
answer: a_{2k+1}=2^{2k-1},\quada_{2k+2}=2^{2k}-C_{2k}^{k}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=117325
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\mathrm{A}$ and $\mathrm{B}$ be non-empty sets, and $\mathrm{A} \cap \mathrm{B}=\Phi, \mathrm{A} \cup \mathrm{B}=\{1,2, \ldots, \mathrm{n}\}(\mathrm{n} \geq 3, \mathrm{n} \in$ $\left.N^{+}\right)$, denote the number of elements in A and B as $a$ and $b$, respectively. The number of all ordered set pairs $(A, B)$ that satisfy "$a \in B$, and $b \in A$" is $\mathrm{a}_{\mathrm{n}}$. Find the expression for $\mathrm{a}_{\mathrm{n}}$.
