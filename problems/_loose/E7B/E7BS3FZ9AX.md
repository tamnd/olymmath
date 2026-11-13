---
tag: E7BS3FZ9AX
kind: problem
type: answer
answer: "84269"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210686
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In the following addition, different letters represent different non-zero digits. What is the 5-digit number $ABCDE$?

$
\begin{array}{ccccccc}
A&B&C&D&E&D&B\\
&B&C&D&E&D&B\\
&&C&D&E&D&B\\
&&&D&E&D&B\\
&&&&E&D&B\\
&&&&&D&B\\
+&&&&&&B\\ \hline
A&A&A&A&A&A&A
\end{array}
$
