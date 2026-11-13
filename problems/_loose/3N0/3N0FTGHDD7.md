---
tag: 3N0FTGHDD7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h455131
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=66594
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=199588
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
If $x$ and $y$ are non-zero real numbers such that
$$ |x|+y=3 \text{and} |x|y+x^3=0, $$
then the integer nearest to $x-y$ is $ \textbf{(A)}\ -3 \textbf{(B)}\ -1 \textbf{(C)}\ 2 \textbf{(D)}\ 3 \textbf{(E)}\ 5 $
