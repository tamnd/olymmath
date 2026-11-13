---
tag: PASFGHJW68
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h548813
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=65435
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=256908
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
Given three positive integers $a,b,$ and $c$ . Their greatest common divisor is $D$ ; their least common multiple is $m$ . Then, which two of the following statements are true? $ \text{(1)}\ \text{the product MD cannot be less than abc} $ $\text{(2)}\ \text{the product MD cannot be greater than abc} $ $\text{(3)}\ \text{MD equals abc if and only if a,b,c are each prime} $ $\text{(4)}\ \text{MD equals abc if and only if a,b,c are each relatively prime in pairs}$ $\text{ (This means: no two have a common factor greater than 1.)}$ $ \textbf{(A)}\ 1,2 \textbf{(B)}\ 1,3 \textbf{(C)}\ 1,4 \textbf{(D)}\ 2,3 \textbf{(E)}\ 2,4 $
