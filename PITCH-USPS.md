# POLARIS — concrete differentiators for the slide deck

These are product differentiators, not claims that no competitor offers them. Mark built features and proposed work explicitly.

## 1. Maintenance decisions linked to resupply constraints

Slide copy: “A generator alert becomes an inspection and spare-part task in the same workflow.”

MVP evidence: inject a generator fault → inspect vibration → see the bearing kit is unavailable → save an inspection/procurement-review work order. Logistics shows the resupply window separately.

Next: automatically rank maintenance urgency using equipment criticality, spare availability, and shipment lead time. Do not claim that ranking already exists.

## 2. Plan in days of operation

Slide copy: “Translate fuel stock and consumption into an operational deadline.”

MVP evidence: station fuel endurance and shipment-delay stress tests show when diesel coverage ends before the modelled arrival.

Next: calculate a conservative station-wide endurance limit across fuel, food, water, and critical equipment, including emergency reserve policies and forecast uncertainty. Today the app computes resource coverage, not a validated station survival guarantee.

## 3. Measure the trade-off before changing the station

Slide copy: “Compare the fuel and endurance impact of heat recovery before requesting engineering review.”

MVP evidence: changing recovery and load-reduction assumptions recalculates fuel use, projected reserves, added endurance, and illustrative avoided combustion emissions. An engineering-review work order preserves the requested assumptions in its description.

Next: include installation downtime, costs, pipe losses, and seasonal conditions. Illustrative outputs must not be presented as field-validated savings.

## 4. Use the 3D model to start an operational task

Slide copy: “Select the building, inspect its system, and create the work order.”

MVP evidence: selectable models for Bharati and Maitri connect asset identity, synthetic readings, fault states, and persistent work orders. A software renderer supports devices without WebGL.

Next: replace conceptual geometry with validated station BIM/GIS models and equipment IDs.

## 5. Adapt international practices through a station-specific feasibility check

Slide copy: “Convert a documented environmental practice into a local engineering proposal.”

MVP evidence: candidate measures for heat recovery, water conservation, and seasonal renewables; a fuel scenario and engineering-review workflow.

Next: a verified source library with programme, publication date, infrastructure prerequisites, seasonal constraints, and recorded suitability decisions. Current reference links are starting points, not a verified global benchmarking engine.

## 6. Keep decisions traceable when telemetry is uncertain

Slide copy for roadmap: “Separate fresh measurements, stale readings, and assumptions before recommending action.”

MVP evidence: satellite-outage scenario explicitly shows last-known synthetic values. Work orders persist across reloads.

Next: timestamped edge buffering, signed replay, stale-data thresholds, conflict-safe resynchronisation, and an audit log. Do not claim the MVP already works offline or stores real sensor history.

## One-slide version

- Link equipment alerts to spare-part and resupply decisions.
- Express resource risk in days of operation.
- Compare conservation measures before committing to physical changes.
- Turn a selected 3D asset into a traceable maintenance action.

Footer: “Demonstrated with synthetic data and conceptual station models.”

## Avoid these claims

“AI predicts failures”, “guaranteed survival”, “30% fuel savings”, “zero downtime”, “real-time satellite integration”, “autonomous procurement”, and “world’s first Antarctic digital twin” are not supported by this MVP.
