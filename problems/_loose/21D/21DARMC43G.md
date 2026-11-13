---
tag: 21DARMC43G
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h364136
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=4748
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=206915
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/China/train/0000.parquet#row=324
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2010
    source: hf-ai-mo-aops
    label: 2010 China Team Selection Test
  - at: cn-tst
    source: hf-mathnet
    label: China China National Team Selection Test
---
Given acute triangle $ABC$ with $AB>AC$ , let $M$ be the midpoint of $BC$ . $P$ is a point in triangle $AMC$ such that $\angle MAB=\angle PAC$ . Let $O,O_1,O_2$ be the circumcenters of $\triangle ABC,\triangle ABP,\triangle ACP$ respectively. Prove that line $AO$ passes through the midpoint of $O_1 O_2$ .
