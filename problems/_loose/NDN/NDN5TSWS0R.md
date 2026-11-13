---
tag: NDN5TSWS0R
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h67931
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=66712
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=199701
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
In an $ h$ -meter race, Sunny is exactly $ d$ meters ahead of Windy when Sunny finishes the race. The next time they race, Sunny sportingly starts $ d$ meters behind Windy, who is at the starting line. Both runners run at the same constant speed as they did in the first race. How many meters ahead is Sunny when Sunny finishes the second race?

$ \textbf{(A)}\ \frac {d}{h} \textbf{(B)}\ 0 \textbf{(C)}\ \frac {d^2}{h} \textbf{(D)}\ \frac {h^2}{d} \textbf{(E)}\ \frac {d^2}{h - d}$
