---
tag: FQRJR3AKCN
kind: problem
type: answer
answer: (2n)!\cdot2^{n^2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=99624
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The seventy-sixth problem: Given a non-negative integer $\mathrm{n}$, select $(\mathrm{n}+1)^{2}$ sets $\mathrm{S}_{\mathrm{i}, \mathrm{j}} \subseteq\{1,2, \ldots, 2 \mathrm{n}\}$ (i, $\mathrm{j} \in$ $\{0,1, \ldots, \mathrm{n}\}$ ), satisfying the following two conditions:
(1) For any $i, j \in\{0,1, \ldots, n\}$, the set $S_{i, j}$ contains exactly $i+j$ elements;
(2) For any $0 \leq \mathrm{i} \leq \mathrm{k} \leq \mathrm{n}, 0 \leq \mathrm{j} \leq \mathrm{t} \leq \mathrm{n}$, we have $\mathrm{S}_{\mathrm{i}, \mathrm{j}} \subseteq \mathrm{S}_{\mathrm{k}, \mathrm{t}}$.
Find the number of all different selection methods.
