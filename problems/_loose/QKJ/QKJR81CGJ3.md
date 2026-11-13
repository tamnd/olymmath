---
tag: QKJR81CGJ3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h282721
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=65369
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=198465
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
A set of $ n$ numbers has the sum $ s$ . Each number of the set is increased by $ 20$ , then multiplied by $ 5$ , and then decreased by $ 20$ . The sum of the numbers in the new set thus obtained is:

$ \textbf{(A)}\ s + 20n
\textbf{(B)}\ 5s + 80n
\textbf{(C)}\ s
\textbf{(D)}\ 5s
\textbf{(E)}\ 5s + 4n$
