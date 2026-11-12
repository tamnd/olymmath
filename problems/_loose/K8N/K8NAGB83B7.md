---
tag: K8NAGB83B7
kind: problem
type: answer
answer: "16"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=8847
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
[8] A $7 \times 7$ board is either empty or has an invisible $2 \times 2$ ship placed on it "by cells." It is allowed to place detectors in some cells of the board and then turn them on simultaneously. An activated detector signals if its cell is occupied by the ship. What is the smallest number of detectors needed to guarantee that, based on their signals, it can be determined whether there is a ship on the board, and if so, which cells it occupies?

(R. Zhinodarov)
