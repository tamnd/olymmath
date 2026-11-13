---
tag: VEDJ11RMWE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2006 India IMO Training Camp
    url: https://artofproblemsolving.com/community/c6h485987
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=42233
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=238818
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: in-tst/2006
    source: hf-ai-mo-aops
    label: 2006 India IMO Training Camp
---
Let $ABC$ be a triangle with inradius $r$ , circumradius $R$ , and with sides $a=BC,b=CA,c=AB$ . Prove that
$$\frac{R}{2r} \ge \left(\frac{64a^2b^2c^2}{(4a^2-(b-c)^2)(4b^2-(c-a)^2)(4c^2-(a-b)^2)}\right)^2.$$
