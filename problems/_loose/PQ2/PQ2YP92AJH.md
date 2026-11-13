---
tag: PQ2YP92AJH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=170250
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Using the letters $A, B$, and $C$, we form words (finite sequences of letters). With a word, the following operations can be performed:

a) We select some consecutive letters in the word - possibly just one, or even the entire word - and "double" them, for example, $B \underline{B C A} C \rightarrow B B C A B C A C$;

b) The reverse of step a): If somewhere in the word, two consecutive segments are identical, we remove one of them: $\triangle B C A B C B C \rightarrow A B C B C$.

Prove that with such a sequence of steps, we can reach a word of at most 8 letters from any word.
