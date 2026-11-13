---
tag: A5NAWT6DG5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1998 Ukraine National Math Olympiad
    url: https://artofproblemsolving.com/community/c6h2581582
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=62946
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=254533
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ua-umo/1998
    source: hf-ai-mo-aops
    label: 1998 Ukraine National Math Olympiad
---
Show that it is possible to write a number from the set $\{1,2,3,4,5\}$ in each square of a $5\times120$ board ( $5$ columns and $120$ rows) so that the following conditions are satisfied:

(i) all numbers in the same row are distinct;
(ii) all rows are distinct;
(iii) the board can be partitioned into $24$ $5\times5$ boards which can be reassembled (without rotating and turning over) into a $120\times5$ board whose $120$ columns are distinct.
