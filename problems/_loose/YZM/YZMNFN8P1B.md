---
tag: YZMNFN8P1B
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2011 Olympic Revenge
    url: https://artofproblemsolving.com/community/c6h453984
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=6927
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=209056
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: olympic-revenge/2011
    source: hf-ai-mo-aops
    label: 2011 Olympic Revenge
---
Let $n \in \mathbb{N}$ and $z \in \mathbb{C}^{*}$ . Prove that $\left | n\textrm{e}^{z} - \sum_{j=1}^{n}\left (1+\frac{z}{j^2}\right )^{j^2}\right | < \frac{1}{3}\textrm{e}^{|z|}\left (\frac{\pi|z|}{2}\right)^2$ .
