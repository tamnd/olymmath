---
tag: NJ6MCARQKJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h255791
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=65137
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=256610
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ahsme
    source: hf-ai-mo-aops
    label: AHSME
---
If the price of an article is increased by percent $ p$ , then the decrease in percent of sales must not exceed $ d$ in order to yield the same income. The value of $ d$ is:
$ \textbf{(A)}\ \frac{1}{1+p} \textbf{(B)}\ \frac{1}{1-p} \textbf{(C)}\ \frac{p}{1+p} \textbf{(D)}\ \frac{p}{p-1} \textbf{(E)}\ \frac{1-p}{1+p}$
