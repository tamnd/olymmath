---
tag: AX0963GHPR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=187262
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=10856
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ibero-American_Mathematical_Olympiad/train/0000.parquet#row=15
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ibero/1988
    source: hf-numina-olympiads
    label: IberoAmerican_MO
  - at: ibero
    source: hf-mathnet
    label: Ibero-American Mathematical Olympiad Iberoamerican Mathematical Olympiad
---
Let $\mathrm{k}^{3}=2$ and let $\mathrm{x}, \mathrm{y}, \mathrm{z}$ be any rational numbers such that $\mathrm{x}+\mathrm{y} \mathrm{k}+\mathrm{z} \mathrm{k}^{2}$ is non-zero. Show that there are rational numbers $\mathrm{u}, \mathrm{v}, \mathrm{w}$ such that $\left(\mathrm{x}+\mathrm{yk}+\mathrm{z} \mathrm{k}^{2}\right)\left(\mathrm{u}+\mathrm{v} \mathrm{k}+\mathrm{w}^{2}\right)=1$.
