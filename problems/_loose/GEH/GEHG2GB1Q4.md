---
tag: GEHG2GB1Q4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h527635
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=9282
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=211315
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/China/train/0001.parquet#row=114
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2013
    source: hf-ai-mo-aops
    label: 2013 China Team Selection Test
  - at: cn-tst
    source: hf-mathnet
    label: China China National Team Selection Test
---
The circumcircle of triangle $ABC$ has centre $O$ . $P$ is the midpoint of $\widehat{BAC}$ and $QP$ is the diameter. Let $I$ be the incentre of $\triangle ABC$ and let $D$ be the intersection of $PI$ and $BC$ . The circumcircle of $\triangle AID$ and the extension of $PA$ meet at $F$ . The point $E$ lies on the line segment $PD$ such that $DE=DQ$ . Let $R,r$ be the radius of the inscribed circle and circumcircle of $\triangle ABC$ , respectively.
Show that if $\angle AEF=\angle APE$ , then $\sin^2\angle BAC=\dfrac{2r}R$
