"use client";

import { Button } from "@/components/ui/button";
import { Download, Save } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { resumeSchema } from "@/app/lib/schema";
import useFetch from "@/hooks/use-fetch";
import { saveResume } from "@/actions/resume";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";

const ResumeBuilder = ({ initialContent }) => {
  const [activeTab, setActiveTab] = useState("edit");

  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(resumeSchema),
    defaultValues: {
      contactInfo: {},
      summary: "",
      skills: "",
      experiences: [],
      education: [],
      projects: [],
    },
  });

  const {
    fn: saveResumeFn,
    loading: isSaving,
    data: saveResult,
    error: saveError,
  } = useFetch(saveResume);

  const formValues = watch();

  useEffect(() => {
    if (initialContent) setActiveTab("preview");
  }, [initialContent]);

  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row justify-between items-center gap-2">
        <h1 className="font-bold gradient-title text-5xl md:text-6xl">
          Resume Builder
        </h1>
      </div>

      <div className="space-x-2">
        <Button variant="destructive">
          <Save className="h-4 w-4" />
          Save
        </Button>
        <Button>
          <Download className="h-4 w-4" />
          Download PDF
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="edit">Form</TabsTrigger>
          <TabsTrigger value="preview">Markdown</TabsTrigger>
        </TabsList>
        <TabsContent value="edit">
          <form>
            <div className="space-y-2">
              <h3 className="text-lg font-medium">Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 border rounded-lg bg-muted/50">
                <div>
                  <label className="text-sm font-medium">Email</label>
                  <Input
                    {...register("contactInfo.email")}
                    type="email"
                    placeholder="your@example.com"
                    error={errors.contactInfo?.email}
                  />

                  {errors.contactInfo?.email && (
                    <p className="text-red-500 text-sm">
                      {errors.contactInfo?.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="text-sm font-medium">Mobile</label>
                  <Input
                    {...register("contactInfo.mobile")}
                    type="tel"
                    placeholder="0903 335 4789"
                    error={errors.contactInfo?.mobile}
                  />

                  {errors.contactInfo?.mobile && (
                    <p className="text-red-500 text-sm">
                      {errors.contactInfo?.mobile.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="text-sm font-medium">LinkedIn URL</label>
                  <Input
                    {...register("contactInfo.linkedin")}
                    type="url"
                    placeholder="https://www.linkedin.com/in/your-profile"
                    error={errors.contactInfo?.linkedin}
                  />

                  {errors.contactInfo?.linkedin && (
                    <p className="text-red-500 text-sm">
                      {errors.contactInfo?.linkedin.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="text-sm font-medium">
                    Twitter/X Profile
                  </label>
                  <Input
                    {...register("contactInfo.twitter")}
                    type="url"
                    placeholder="https://www.x.com/username"
                    error={errors.contactInfo?.twitter}
                  />

                  {errors.contactInfo?.twitter && (
                    <p className="text-red-500 text-sm">
                      {errors.contactInfo?.twitter.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </form>
        </TabsContent>
        <TabsContent value="preview">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
};
export default ResumeBuilder;
