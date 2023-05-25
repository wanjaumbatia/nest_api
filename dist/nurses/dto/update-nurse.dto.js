"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateNurseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_nurse_dto_1 = require("./create-nurse.dto");
class UpdateNurseDto extends (0, swagger_1.PartialType)(create_nurse_dto_1.CreateNurseDto) {
}
exports.UpdateNurseDto = UpdateNurseDto;
//# sourceMappingURL=update-nurse.dto.js.map