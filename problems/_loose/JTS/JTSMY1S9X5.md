---
tag: JTSMY1S9X5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h435957
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=66398
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=199394
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
In an experiment, a scientific constant $C$ is determined to be $2.43865$ with an error of at most $\pm 0.00312$ . The experimenter wishes to announce a value for $C$ in which every digit is significant. That is, whatever $C$ is, the announced value must be the correct result when C is rounded to that number of digits. The most accurate value the experimenter can announce for $C$ is $ \textbf{(A)}\ 2 \textbf{(B)}\ 2.4 \textbf{(C)}\ 2.43 \textbf{(D)}\ 2.44 \textbf{(E)}\ 2.439 $
