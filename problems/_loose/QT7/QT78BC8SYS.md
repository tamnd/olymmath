---
tag: QT78BC8SYS
kind: problem
type: answer
answer: (\sqrt{2})^{n}-1(\sqrt{2}+1)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=98799
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the set of positive integers
$$
S=\left\{a_{1}, a_{2}, \cdots, a_{n}\right\}
$$

satisfying that for any $S_{1} 、 S_{2} \subseteq S$, and $S_{1} \neq S_{2}$, we have
$$
\sum_{i \in S_{1}} i \neq \sum_{i \in S_{2}} j \text {. }
$$

Find the minimum value of $\sqrt{a_{1}}+\sqrt{a_{2}}+\cdots+\sqrt{a_{n}}$.
