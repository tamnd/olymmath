---
tag: YDE404GQW1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1978 Romania Team Selection Test
    url: https://artofproblemsolving.com/community/c6h1715171
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54239
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=247758
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-tst/1978
    source: hf-ai-mo-aops
    label: 1978 Romania Team Selection Test
---
Associate to any point $ (h,k) $ in the integer net of the cartesian plane a real number $ a_{h,k} $ so that $$ a_{h,k}=\frac{1}{4}\left( a_{h-1,k} +a_{h+1,k}+a_{h,k-1}+a_{h,k+1}\right) , \forall h,k\in\mathbb{Z} . $$ **a)** Prove that it´s possible that all the elements of the set $ A:=\left\{ a_{h,k}\big| h,k\in\mathbb{Z}\right\} $ are different. **b)** If so, show that the set $ A $ hasn´t any kind of boundary.
