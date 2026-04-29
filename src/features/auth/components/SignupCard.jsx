import { useState } from "react";
import InputWithLabel from "@/components/InputWithLabel";
import { Button } from "@/components/ui/button";

function SignupCard() {
  const [form, setForm] = useState({
    doctorCode: "",
    firstName: "",
    middleName: "",
    lastName: "",
    cellphone: "",
    dob: "",
  });

  const handleChange = (key) => (e) =>
    setForm((s) => ({ ...s, [key]: e.target.value }));

  return (
    <div className="mx-auto max-w-3xl rounded-xl bg-white p-8 shadow-sm">
      <h3 className="mb-6 text-2xl font-bold">Create Doctor Account</h3>

      <div className="space-y-4">
        <InputWithLabel
          id="doctorCode"
          label="DOCTOR CODE"
          placeholder="Enter your unique medical license or ID"
          value={form.doctorCode}
          onChange={handleChange("doctorCode")}
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <InputWithLabel
            id="firstName"
            label="FIRST NAME"
            placeholder="John"
            value={form.firstName}
            onChange={handleChange("firstName")}
          />
          <InputWithLabel
            id="middleName"
            label="MIDDLE NAME"
            placeholder="Middle Name"
            value={form.middleName}
            onChange={handleChange("middleName")}
          />
          <InputWithLabel
            id="lastName"
            label="LAST NAME"
            placeholder="Doe"
            value={form.lastName}
            onChange={handleChange("lastName")}
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <InputWithLabel
            id="cellphone"
            label="CELLPHONE NO."
            placeholder="09XXXXXXXXX"
            value={form.cellphone}
            onChange={handleChange("cellphone")}
          />
          <InputWithLabel
            id="dob"
            label="DATE OF BIRTH"
            type="date"
            value={form.dob}
            onChange={handleChange("dob")}
          />
        </div>

        <div className="pt-2">
          <Button
            variant="primary"
            size="lg"
            className="font-manrope h-14 w-full"
          >
            Create Doctor Account
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SignupCard;
