---
tag: HXDPKFX0F1
kind: problem
type: answer
answer: "24"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221167
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Yu Semo and Yu Sejmo have created sequences of symbols $\mathcal{U} = (\text{U}_1, \ldots, \text{U}_6)$ and $\mathcal{J} = (\text{J}_1, \ldots, \text{J}_6)$. These sequences satisfy the following properties.

- Each of the twelve symbols must be $\Sigma$, $\#$, $\triangle$, or $\mathbb{Z}$.

- In each of the sets $\{\text{U}_1, \text{U}_2, \text{U}_4, \text{U}_5\}$, $\{\text{J}_1, \text{J}_2, \text{J}_4, \text{J}_5\}$, $\{\text{U}_1, \text{U}_2, \text{U}_3\}$, $\{\text{U}_4, \text{U}_5, \text{U}_6\}$, $\{\text{J}_1, \text{J}_2, \text{J}_3\}$, $\{\text{J}_4, \text{J}_5, \text{J}_6\}$, no two symbols may be the same.

- If integers $d \in \{0, 1\}$ and $i, j \in \{1, 2, 3\}$ satisfy $\text{U}_{i + 3d} = \text{J}_{j + 3d}$, then $i < j$.

How many possible values are there for the pair $(\mathcal{U}, \mathcal{J})$?
