---
tag: CN0AHD5NEY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2007 AMC 10
    url: https://artofproblemsolving.com/community/c6h251559
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=64506
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=256117
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: amc10
    source: hf-ai-mo-aops
    label: 2007 AMC 10
---
A cryptographic code is designed as follows. The first time a letter appears in a given message it is replaced by the letter that is $ 1$ place to its right in the alphabet (assuming that the letter $ A$ is one place to the right of the letter $ Z$ ). The second time this same letter appears in the given message, it is replaced by the letter that is $ 1+2$ places to the right, the third time it is replaced by the letter that is $ 1 + 2 + 3$ places to the right, and so on. For example, with this code the word "banana" becomes "cbodqg". What letter will replace the last letter $ \text{s}$ in the message "Lee's sis is a Mississippi miss, Chriss!"?

$ \textbf{(A)}\ \text{g}
\textbf{(B)}\ \text{h}
\textbf{(C)}\ \text{o}
\textbf{(D)}\ \text{s}
\textbf{(E)}\ \text{t}$
