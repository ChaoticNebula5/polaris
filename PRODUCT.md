# POLARIS — Antarctic operations MVP

## Implemented
- Two procedural, conceptual 3D station layouts (Bharati and Maitri), eight selectable infrastructure assets, orbit/zoom, cutaway, status/energy/thermal overlays, GPU and software rendering.
- Deterministic browser telemetry at 2.5-second intervals. Normal, generator fault, storm, and communications outage scenarios; pause/reset controls.
- Linked asset inspection, anomaly response, missing-spare review, and durable work orders in D1 through validated HTTP endpoints.
- Fuel/food/water inventory planning, shipment-delay stress tests, explicit heat recovery and load-reduction forecasting, JSON report export.
- Rule-based station assistant; candidate environmental measures with engineering-review workflows.

## Architecture
React/Vinext interface → shared deterministic model → procedural Three.js geometry and forecasts.
HTTP /api/orders → prepared D1 statements → work_orders table. Drizzle owns migrations.
The deployed site is private through the hosting platform. There are no per-operator application roles.

## Demo sequence
1. Inspect Bharati, select assets and orbit the model; compare Maitri.
2. Choose Generator fault. Inspect elevated vibration in the power plant.
3. Review the alert. Create a response work order for inspection and bearing procurement.
4. Open Maintenance; change status, reload, and confirm persistence.
5. Open Logistics; increase shipment delay past fuel endurance.
6. Open Environmental intelligence; compare heat recovery and load reduction, then save an engineering review.
7. Export the station report.

## Model boundaries
No live station sensors, remote actuator control, surveyed geometry, trained anomaly/predictive model, vessel tracking, or LLM API is connected. All values and schedules are synthetic. Environmental scores are illustrative, not certified. Practice links are reference starting points; their content was not verified during implementation.

Fuel scenario: new burn = baseline × (1 − 0.35 × recovery/100) × (1 − reduction/100). Endurance = fuel/new burn. CO2 uses an illustrative 2.68 kg/L combustion factor. Weather consumption uplift is a separate 24% scenario; environmental calculations use the stated baseline. Models exclude safety reserves, lifecycle costs, and installation downtime.

## Next production milestones
1. Import validated BIM/GIS geometry and tag equipment IDs against station inventories.
2. Add authenticated edge telemetry ingestion, timestamped history, buffering and reconciliation.
3. Calibrate thresholds and forecasts against real operational records; backtest predictive maintenance.
4. Add operator roles, acknowledgement/escalation policies and an immutable audit trail.
5. Curate verified international practice sources and engineering sign-off criteria.

## Verification
Build and TypeScript checks; browser checks of the software-rendered model, fault assessment, D1 work-order creation, reload persistence, and status update; deterministic baseline and fuel scenario calculations. The browser had no WebGL, so GPU rendering could not be exercised there. WebMCP is implemented behind feature detection but the preview browser did not expose modelContext.
