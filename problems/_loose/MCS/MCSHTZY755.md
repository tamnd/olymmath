---
tag: MCSHTZY755
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2014 NIMO Problems
    url: https://artofproblemsolving.com/community/c6h603656
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=11612
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=213569
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: nimo/2014
    source: hf-ai-mo-aops
    label: 2014 NIMO Problems
---
Let $ABC$ be a triangle with circumcenter $O$ and let $X$ , $Y$ , $Z$ be the midpoints of arcs $BAC$ , $ABC$ , $ACB$ on its circumcircle. Let $G$ and $I$ denote the centroid of $\triangle XYZ$ and the incenter of $\triangle ABC$ .

Given that $AB = 13$ , $BC = 14$ , $CA = 15$ , and $\frac {GO}{GI} = \frac mn$ for relatively prime positive integers $m$ and $n$ , compute $100m+n$ .

*Proposed by Evan Chen*
