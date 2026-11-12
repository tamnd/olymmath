---
tag: CDDBC45NMJ
kind: problem
type: answer
answer: loading\time\-\13,\\of\loaded\trucks\-\5
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=8578
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Several dump trucks, standing in a queue, are loaded one by one at point A (the loading time is the same for all trucks) and transport the cargo to point B, where they are instantly unloaded and return to A. The speeds of the trucks are the same, and the speed of a loaded truck is 6/7 of the speed of an empty truck. The first driver to leave A was Petrov. On his way back, he met driver Ivanov, who left A last, and arrived at A 6 minutes after the meeting. Here, Petrov immediately started loading, and after the loading was completed, he left for point B and met Ivanov a second time 40 minutes after the first meeting. From the place of the second meeting, it took Ivanov no less than **16** minutes but no more than 19 minutes to reach A. Determine the loading time and the number of trucks being loaded.
