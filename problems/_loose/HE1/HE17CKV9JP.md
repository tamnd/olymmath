---
tag: HE17CKV9JP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2017 Taiwan TST Round 3
    url: https://artofproblemsolving.com/community/c6h1626549
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=61189
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=253185
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tw-tst/2017
    source: hf-ai-mo-aops
    label: 2017 Taiwan TST Round 3
---
Choose a rational point $P_0(x_p,y_p)$ arbitrary on ellipse $C:x^2+2y^2=2098$ . Define $P_1,P_2,\cdots$ recursively by the following rules: $(1)$ Choose a lattice point $Q_i=(x_i,y_i)\notin C$ such that $|x_i|<50$ and $|y_i|<50$ . $(2)$ Line $P_iQ_i$ intersects $C$ at another point $P_{i+1}$ .

Prove that for any point $P_0$ we can choose suitable points $Q_0,Q_1,\cdots$ such that $\exists k\in\mathbb{N}\cup\{0\}$ , $\overline{OP_k}^2=2017$ .
